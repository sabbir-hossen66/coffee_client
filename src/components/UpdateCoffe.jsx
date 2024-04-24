import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffe = () => {
  const coffee = useLoaderData()
  const { _id, name, quantity, taste, detail, photoURL, category } = coffee;
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('mama');
    const form = e.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    // const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const detail = form.detail.value;
    const photoURL = form.photoURL.value;
    const coffee = { name, quantity, taste, detail, photoURL, category }

    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(coffee)
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'success!',
            text: 'Do you want to continue',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
      })


  }

  return (
    <div>
      <h2>This is AddSection</h2>

      <section className="p-6 dark:bg-gray-50 dark:text-gray-900">
        <form onSubmit={handleSubmit} className="container flex flex-col mx-auto space-y-12">
          <div className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-md ">

            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Coffee name</label>
                <input id="name" type="text" name="name" defaultValue={name} className="w-full rounded bg-white border-2" />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="lastname" className="text-sm">Avilable Quantity</label>
                <input id="quantity" type="quantity" name="quantity" defaultValue={quantity} className="w-full rounded bg-white border-2" />
              </div>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sm">Supplier Name</label>
                <input id="suplier name" type="name" name="supplierName" defaultValue={''} className="w-full rounded bg-white border-2" />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="lastname" className="text-sm">Taste</label>
                <input id="taste" type="text" name="taste" defaultValue={taste} className="w-full rounded bg-white border-2" />
              </div>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sm">category</label>
                <input id="category" type="text" name="category" defaultValue={category} className="w-full rounded bg-white border-2" />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Detail</label>
                <input id="detail" type="text" defaultValue={detail} name="detail" className="w-full rounded bg-white border-2" />
              </div>
            </div>

            <div className="col-span-full sm:col-span-3">
              <label htmlFor="email" className="text-sm">photo url</label>
              <input id="photo url" type="photoURL" name="photoURL" defaultValue={photoURL} className="w-full rounded bg-white border-2 p-2" />
            </div>

          </div>
          <input type="submit" value="updated" className="btn btn-block" />
        </form>
      </section>
    </div>
  );
};

export default UpdateCoffe;