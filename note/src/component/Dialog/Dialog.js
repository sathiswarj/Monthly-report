// function Dialog({ isOpen, onClose, title, children }) {
//   if (!isOpen) return null;

//   return (
//     <div style={{ position: 'fixed', inset: 0, zIndex: 50, backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={onClose}>
//       <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '0.5rem', maxWidth: '30rem', width: '100%' }} onClick={(e) => e.stopPropagation()}>
//         <h2 className="text-xl font-bold mb-4">{title}</h2>
//         <div>{children}</div>
//         <button onClick={onClose} className="mt-4 px-4 py-2 bg-gray-200 rounded">
//           Close
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Dialog;


function BasicModal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-md rounded-lg p-6 shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-semibold mb-4">{title}</h2>

        <div className="mb-6">{children}</div>

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default BasicModal;  
