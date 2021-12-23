import jsonp from 'jsonp'
import queryString from 'query-string'

export default {
  props: {
    url: {
      required: true,
      type: String,
    },

    userId: {
      required: true,
      type: String,
    },

    listId: {
      required: true,
      type: String,
    },
  },

  data() {
    return {
      email: null,
      success: false,
      error: null,
      loading: false,
    }
  },

  computed: {
    data() {
      return queryString.stringify({
        u: this.userId,
        id: this.listId,
        EMAIL: this.email,
      })
    },
  },

  methods: {
    setEmail(value = '') {
      this.email = value.trim()
    },

    subscribe() {
      if (this.email === null || this.loading) {
        return
      }

      this.success = false
      this.error = null
      this.loading = true
      this.message = null

      const url = `${this.url}?${this.data}`

      jsonp(url, { param: 'c' }, this.onResponse)
    },

    onResponse(error, data) {
      this.loading = false

      if (error) {
        this.error = error
      }

      if (data && data.result !== 'success') {
        this.error = this.formatErrorMessage(data.msg)
      }

      if (this.error) {
        this.$emit('error', this.error)
      } else {
        this.success = true
        this.email = null
        this.message = data.msg
        this.$emit('success', this.message, data, error)
      }
    },

    formatErrorMessage(message) {
      return message.replace('0 - ', '')
    },
  },

  render() {
    return this.$scopedSlots.default({
      subscribe: this.subscribe,
      setEmail: this.setEmail,
      error: this.error,
      success: this.success,
      loading: this.loading,
      message: this.message
    })
  },
}
