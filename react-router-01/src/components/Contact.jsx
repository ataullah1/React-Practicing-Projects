const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Clicked', e);
    console.log(e.target.nameText.value);
    console.log(e.target.email.value);
    console.log(e.target.number.value);
  };
  return (
    <div>
      <h1>This is Contact section</h1>
      <div className="border border-gray-400 rounded-xl w-3/6 mx-auto my-9">
        <form
          action=""
          className="flex flex-col justify-center items-center p-10"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="nameText"
            id=""
            placeholder="Enter your name"
            className="px-5 py-2 border-2 border-fuchsia-200 mb-3 outline-none w-full rounded-md"
          />{' '}
          <input
            type="email"
            name="email"
            id=""
            placeholder="Enter your email"
            className="px-5 py-2 border-2 border-fuchsia-200 mb-3 outline-none w-full rounded-md"
          />
          <input
            type="number"
            name="number"
            placeholder="Enter your number "
            className="px-5 py-2 border-2 border-fuchsia-200 mb-3 outline-none w-full rounded-md"
            id=""
          />
          <input
            type="submit"
            value="Submit"
            className="py-2 px-10 bg-teal-300 w-full rounded-md font-bold duration-200 active:scale-95"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
