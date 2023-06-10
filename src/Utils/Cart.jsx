import { useEffect } from 'react';
import useApi from './useApi';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();
  const { data, error, getProducts } = useApi();

  useEffect(() => {
    getProducts("/products");
  }, []);

  const handleClick = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <div className="grid grid-cols-8 bg-yellow-100">
      {data.map((item) => (
        <div
          key={item.id}
          className="col-span-2 bg-white mx-4 my-4 h-96 border-2  border-slate-600 hover:scale-105"
        >
          <div className="flex flex-col h-[200px]">
            <div className="flex flex-col items-center">
              <img
                src={item.image}
                alt="product item"
                className="h-36 m-2"
                onClick={() => handleClick(item.id)}
              />
            </div>
            <div>
              <p className="w-full mx-2 my-2">
                <span className="text-green text-lg font-bold text-green-500">Name: </span>
                <span className="text-lg font-medium">{item.title}</span>
              </p>
              <p className="w-full mx-2 my-2">
                <span className="text-green text-lg font-bold text-green-500">Cost: </span>
                <span className="text-lg font-medium">{item.price} $</span>
              </p>
              <p className="w-full mx-2 my-2">
                <span className="text-green text-lg font-bold text-green-500">Category: </span>
                <span className="text-lg font-medium">{item.category}</span>
              </p>
            </div>
          </div>
          <div>
            <div className="h-60 grid grid-cols-2 m-2 gap-4 content-center ...">
              <button className="w-25 h-10 px-4 py-1 rounded-md my-3 mx-2 bg-indigo-600 text-white hover:bg-green-500 opacity-100">
                Add to cart
              </button>
              <button className="w-25 h-10 px-4 py-1 rounded-md my-3 mx-2 bg-indigo-600 text-white hover:bg-green-500 opacity-100">
                View cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;

