const sorting = require('../../app.js');

describe('Books names test suit', () => {
   it('Books names should be sorted in ascending order', () => {
      const data = [
         'Гарри Поттер',
         'Властелин Колец',
         'Волшебник изумрудного города'
      ];
      const expected = [
         'Властелин Колец',
         'Волшебник изумрудного города',
         'Гарри Поттер'
      ];
      const result = sorting.sortByName(data);
      expect(result).toEqual(expected);
   });

   it('Function should throw exception when used without parametr', () => {
      expect(() => sorting.sortByName()).toThrow(TypeError);
   });

   it('Books names should be sorted in ascending order', () => {
      const data = ['Вий', 'Ямал', 'Брат', 'Арфа', 'Зорро'];
      const expected = ['Арфа', 'Брат', 'Вий', 'Зорро', 'Ямал'];
      const result = sorting.sortByName(data);
      expect(result).toEqual(expected);
   });

   it('Books names should be sorted in ascending order', () => {
      const data = [];
      const expected = [];
      const result = sorting.sortByName(data);
      expect(result).toEqual(expected);
   });

   it('Books names should be sorted in ascending order', () => {
      const data = ['Солнце'];
      const expected = ['Солнце'];
      const result = sorting.sortByName(data);
      expect(result).toEqual(expected);
   });
});
