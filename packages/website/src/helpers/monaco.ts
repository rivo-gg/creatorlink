import type { Monaco } from '@monaco-editor/react'

export const handleEditorDidMount = (monaco: Monaco) => {
  monaco.editor.defineTheme('vs-dark', {
    base: 'vs-dark',
    inherit: true,
    rules: [],
    colors: {}
  })
}
