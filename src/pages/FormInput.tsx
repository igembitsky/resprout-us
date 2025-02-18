const FormInput = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Form Input</h1>
      <div className="max-w-2xl mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Field 1</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Enter value"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Field 2</label>
          <select className="w-full p-2 border rounded">
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FormInput;
