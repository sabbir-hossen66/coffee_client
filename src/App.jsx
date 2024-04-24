import { useLoaderData } from "react-router-dom"
import SingleCoffe from "./components/SingleCoffe"
import { useState } from "react"
// import Swal from "sweetalert2"

function App() {

  const coffes = useLoaderData()
  const [seeCoffes, setSeeCoffes] = useState(coffes)

  // const handleDelete = (_id) => {
  //   console.log('hello delete', _id);
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!"
  //   }).then((result) => {
  //     if (result.isConfirmed) {

  //       fetch(`http://localhost:5000/coffee/${_id}`, {
  //         method: 'DELETE',

  //       })
  //         .then(res => res.json())
  //         .then(data => {
  //           if (data.deletedCount > 0) {
  //             const newData = seeCoffes.filter(oneCoffe => oneCoffe._id !== _id)
  //             setSeeCoffes(newData)
  //             Swal.fire({
  //               title: "Deleted!",
  //               text: "Your file has been deleted.",
  //               icon: "success"
  //             });
  //           }
  //         })
  //     }
  //   });
  // }
  return (
    <>

      <h1>coffee:{coffes.length}</h1>
      <div className="grid md:grid-cols-3 gap-4 p-8">
        {
          seeCoffes.map(coffee => <SingleCoffe key={SingleCoffe._id}
            coffee={coffee}
            // handleDelete={handleDelete}
            seeCoffes={seeCoffes}
            setSeeCoffes={setSeeCoffes}
          ></SingleCoffe>)
        }
      </div>

    </>
  )
}

export default App
