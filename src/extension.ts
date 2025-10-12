import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  console.log('Path Switcher extension is active!');

  // Fungsi utama konversi path
  const convertPaths = (mode: 'auto' | 'absolute' | 'relative') => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      vscode.window.showInformationMessage('Tidak ada file yang sedang dibuka.');
      return;
    }

    const document = editor.document;
    const text = document.getText();

    // Deteksi mode otomatis berdasarkan isi dokumen
    let isAbsolute = false;
    if (mode === 'auto') {
      isAbsolute =
        text.includes(`src="/`) ||
        text.includes(`href="/`) ||
        text.includes(`url("/`);
    } else {
      isAbsolute = mode === 'absolute';
    }

    // Regex umum untuk src, href, data-src, poster, srcset, dan CSS url()
    const regex =
      /(\b(?:src|href|data-src|poster|srcset)\s*=\s*["'])([^"']+)(["'])|url\((['"]?)([^'")]+)(['"]?)\)/g;

    const newText = text.replace(regex, (match, p1, p2, p3, q1, p5, q3) => {
      if (p2) {
        // atribut HTML
        if (isAbsolute && p2.startsWith('/')) {
          // absolute → relative
          return `${p1}${p2.replace(/^\//, '')}${p3}`;
        } else if (!isAbsolute && !p2.startsWith('/') && !p2.startsWith('http')) {
          // relative → absolute
          return `${p1}/${p2}${p3}`;
        }
      } else if (p5) {
        // CSS url()
        if (isAbsolute && p5.startsWith('/')) {
          return `url(${q1}${p5.replace(/^\//, '')}${q3})`;
        } else if (!isAbsolute && !p5.startsWith('/') && !p5.startsWith('http')) {
          return `url(${q1}/${p5}${q3})`;
        }
      }
      return match;
    });

    if (newText !== text) {
      const fullRange = new vscode.Range(
        document.positionAt(0),
        document.positionAt(text.length)
      );
      editor.edit(editBuilder => {
        editBuilder.replace(fullRange, newText);
      });

      if (mode === 'auto') {
        vscode.window.showInformationMessage(
          isAbsolute
            ? '🔄 Semua path diubah ke RELATIF'
            : '🔄 Semua path diubah ke ABSOLUT'
        );
      } else {
        vscode.window.showInformationMessage(
          mode === 'relative'
            ? '✅ Semua path diubah ke RELATIF'
            : '✅ Semua path diubah ke ABSOLUT'
        );
      }
    } else {
      vscode.window.showInformationMessage('Tidak ada path yang dapat diubah.');
    }
  };

  // Command toggle otomatis
  const toggleCmd = vscode.commands.registerCommand(
    'path-switcher.togglePath',
    () => convertPaths('auto')
  );

  context.subscriptions.push(toggleCmd);
}

export function deactivate() {}