// angular.copy(source, [destination]);

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

  describe('angular.copy(destination, sourc)', function(){
    it('should do deep copy', function() {
      angular.copy(person1, person2);
      // person1.address was copied OVER person2.address 
      expect(person2.address).toEqual(person1.address);
    });
  });

});

