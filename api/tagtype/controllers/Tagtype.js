'use strict';

/**
 * Tagtype.js controller
 *
 * @description: A set of functions called "actions" for managing `Tagtype`.
 */

module.exports = {

  /**
   * Retrieve tagtype records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.tagtype.search(ctx.query);
    } else {
      return strapi.services.tagtype.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a tagtype record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.tagtype.fetch(ctx.params);
  },

  /**
   * Count tagtype records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.tagtype.count(ctx.query);
  },

  /**
   * Create a/an tagtype record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.tagtype.add(ctx.request.body);
  },

  /**
   * Update a/an tagtype record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.tagtype.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an tagtype record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.tagtype.remove(ctx.params);
  }
};
