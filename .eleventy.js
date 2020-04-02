
      const filters = require('./_utils/filters.js');
      
      module.exports = function(eleventyConfig) {

        const references = JSON.parse('{"items**item":{"field":"item","limit":6},"authors**author":{"field":"author","limit":6},"items**collections-contains-current-collections":{"field":"collections-contains-current-collections","limit":6},"stories**story":{"field":"story","limit":6}}');

        filters(eleventyConfig, references);

        eleventyConfig.addPassthroughCopy("static/**");
        eleventyConfig.addPassthroughCopy("admin/**");
        
        return {
          dir: {
            input: "site",
            includes: "_views",
            output: "public"
          }
        };
      };