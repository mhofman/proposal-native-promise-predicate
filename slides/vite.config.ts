import type { UserConfig } from 'vite'

export default {
  build: {
    // Necessary since slidev/vite considers `slides` as the root, and we
    // output to `./slides/../build/`, which is "outside" the root project.
    emptyOutDir: true,
  }
} satisfies UserConfig
