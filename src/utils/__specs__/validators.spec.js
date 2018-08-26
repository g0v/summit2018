import { getObjectValidator, getObjectsValidator } from '../validators'

const postSchema = {
  title: String,
  likes: Number,
  public: Boolean,
  commentIds: Array,
  created: Date,
  author: Object,
}

const validPost = {
  title: 'Awesome!',
  likes: 10,
  public: true,
  commentIds: [123, 456],
  created: new Date(),
  author: { name: 'John Doe' },
}

const validatePost = getObjectValidator(postSchema)
const validatePosts = getObjectsValidator(postSchema)

describe('validators', () => {
  describe('ObjectValidator', () => {
    it('Return true for object with right shape', () => {
      const result = validatePost(validPost)
      expect(result).toBe(true)
    })

    it('Return false for object with wrong shape (String)', () => {
      const result = validatePost({ ...validPost, title: 42 })
      expect(result).toBe(false)
    })

    it('Return false for object with wrong shape (Number)', () => {
      const result = validatePost({ ...validPost, likes: 'Ten' })
      expect(result).toBe(false)
    })

    it('Return false for object with wrong shape (Boolean)', () => {
      const result = validatePost({ ...validPost, public: 'Yes' })
      expect(result).toBe(false)
    })

    it('Return false for object with wrong shape (Array)', () => {
      const result = validatePost({
        ...validPost,
        commentIds: { '1': 123, '2': 456 },
      })
      expect(result).toBe(false)
    })

    it('Return false for object with wrong shape (Date)', () => {
      const result = validatePost({ ...validPost, created: 'Yesterday' })
      expect(result).toBe(false)
    })

    it('Return false for object with wrong shape (Object)', () => {
      const result = validatePost({ ...validPost, author: 'John Doe' })
      expect(result).toBe(false)
    })
  })

  describe('ObjectsValidator', () => {
    it('Return true for array of objects with right shape', () => {
      const result = validatePosts([validPost])
      expect(result).toBe(true)
    })

    it('Return false for array of objects with wrong shape (String)', () => {
      const result = validatePosts([{ ...validPost, title: 42 }])
      expect(result).toBe(false)
    })

    it('Return false for array of objects with wrong shape (Number)', () => {
      const result = validatePosts([{ ...validPost, likes: 'Ten' }])
      expect(result).toBe(false)
    })

    it('Return false for array of objects with wrong shape (Boolean)', () => {
      const result = validatePosts([{ ...validPost, public: 'Yes' }])
      expect(result).toBe(false)
    })

    it('Return false for array of objects with wrong shape (Array)', () => {
      const result = validatePosts([
        {
          ...validPost,
          commentIds: { '1': 123, '2': 456 },
        },
      ])
      expect(result).toBe(false)
    })

    it('Return false for array of objects with wrong shape (Date)', () => {
      const result = validatePosts([{ ...validPost, created: 'Yesterday' }])
      expect(result).toBe(false)
    })

    it('Return false for array of objects with wrong shape (Object)', () => {
      const result = validatePosts([{ ...validPost, author: 'John Doe' }])
      expect(result).toBe(false)
    })
  })
})
