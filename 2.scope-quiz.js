{
  const x = 1;
  {
    const y = 2;
    console.log(x);
  }
  console.log(x);
  console.log(y);
}

const text = 'global';
{
  const text = 'inside block1';
  {
    const text = 'inside block2';
    console.log(text);
  }
}
