'use strict';

/**
 * Assettype.js controller
 *
 * @description: A set of functions called "actions" for managing `Assettype`.
 */

module.exports = {

  /**
   * Retrieve assettype records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.assettype.search(ctx.query);
    } else {
      return strapi.services.assettype.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a assettype record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.assettype.fetch(ctx.params);
  },

  /**
   * Count assettype records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.assettype.count(ctx.query);
  },

  /**
   * Create a/an assettype record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.assettype.add(ctx.request.body);
  },

  /**
   * Update a/an assettype record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.assettype.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an assettype record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.assettype.remove(ctx.params);
  }
};
