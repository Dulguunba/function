let input = {
  value: 1,
  children: [
    { value: 2, children: [{ value: 3 }, { value: 4 }] },
    {
      value: 5,
      children: [
        { value: 6 },
        { value: 7, children: [{ value: 8 }, { value: 9 }] },
      ],
    },
  ],
};

console.log(Object.values(input).flat());

function recursive(input) {}
