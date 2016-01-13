describe('Object manipulation', function(){
  var person1 = {
      id: 1,
      name: "John",
      address: {
        postcode: "SW1"
      }
    },
    person2 = {
      id: 3,
      name: "Mary",
      address: {
        description: "Oxford Street"
      }
    };

  describe('angular.extend(destination, source[, source])', function(){
    var extended;
    beforeEach(function(){ extended = {}; });

    it('should NOT do deep copy (shallow copy)', function() {
      extended = angular.extend({}, person1, person2);
      // person2.address was copied over person1.address (NOT copied over property by property)
      expect(extended.address).toEqual(person2.address);
      expect(extended.address.postcode).toBeUndefined();
    })
  })

  describe('angular.merge(destination, source[, source]) *NEW IN 1.4*', function(){
    var merged;
    beforeEach(function(){ merged = {}; });

    it('should DO deep copy', function() {
      merged = angular.merge({}, person1, person2);
      // person2.address was NOT copied over person1.address (BUT copied over property by property)
      expect(merged.address).not.toEqual(person2.address);
      expect(merged.address.postcode).not.toBeUndefined();
    })

  })
});
