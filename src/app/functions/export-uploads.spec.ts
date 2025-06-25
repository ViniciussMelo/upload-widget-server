import { randomUUID } from 'node:crypto'
import { makeUpload } from '@/test/factories/make-upload'
import { describe, it } from 'vitest'
import { exportUploads } from './export-uploads'

describe('export uploads', () => {
  it('should be able to export uploads', async () => {
    const namePattern = randomUUID()

    const [upload1, upload2, upload3, upload4, upload5] = await Promise.all([
      makeUpload({ name: `${namePattern}.webp` }),
      makeUpload({ name: `${namePattern}.webp` }),
      makeUpload({ name: `${namePattern}.webp` }),
      makeUpload({ name: `${namePattern}.webp` }),
      makeUpload({ name: `${namePattern}.webp` }),
    ])

    const sut = await exportUploads({
      searchQuery: namePattern,
    })
  })
})
