
import { Link } from "react-router-dom";
import Swal from "sweetalert2"
const SingleCoffe = ({ coffee, seeCoffes, setSeeCoffes }) => {
  const { _id, name, quantity, taste, detail, photoURL, category } = coffee

  const handleDelete = (_id) => {
    console.log('hello delete', _id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: 'DELETE',

        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              const newData = seeCoffes.filter(oneCoffe => oneCoffe._id !== _id)
              setSeeCoffes(newData)
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          })
      }
    });
  }

  return (
    <div>
      <div className="max-w-full p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
        <img src={photoURL} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
        <div className="mt-6 mb-2  flex justify-evenly w-full">
          <div >
            <span className="block text-xs font-medium tracking-widest uppercase dark:text-default-600">{name}</span>
            <h2 className="text-xl font-semibold tracking-wide">{quantity}</h2>
            <h2 className="text-xl font-semibold tracking-wide">{taste}</h2>
            <h2 className="text-xl font-semibold tracking-wide">{detail}</h2>
            <h2 className="text-xl font-semibold tracking-wide">{category}</h2>
          </div>
          <div className="card-action justify-end">
            <div className="join join-vertical gap-2">
              <button className="btn join-item">See</button>
              <Link to={`updatecoffee/${_id}`}>
                <button className="btn join-item">Detail</button>
              </Link>
              <button
                onClick={() => handleDelete(_id)}
                className="btn join-item bg-orange-500">x</button>
            </div>
          </div>
        </div>
        <p className="dark:text-gray-800">Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.</p>
      </div>
    </div>
  );
};

export default SingleCoffe;