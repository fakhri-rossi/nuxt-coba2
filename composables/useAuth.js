export const useAuth = () => {
  const name = useState('name', () => 'rossi');
  const x = useState('x', () => '40')
  const setName = (newName) => {
    name.value = newName;
    console.log(name.value);
  }
  const setX = (newValue) => {
    x.value = newValue
    console.log(x.value);
  }

  return {
    name,
    setName,

    x,
    setX
  }
}
