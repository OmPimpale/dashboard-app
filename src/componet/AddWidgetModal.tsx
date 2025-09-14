import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWidget } from '../store/slice';

export default function AddWidgetModal({ categoryId, onClose }: { categoryId: string; onClose: () => void }) {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    return (
        <div className="modal-backdrop">
            <div className="bg-slate-50 p-4 rounded shadow-md w-full max-w-md mt-4">
                <h4 className="font-semibold mb-2 text-center">Add Widget</h4>
                <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" className="w-full border text-xs border-gray-300 p-2 rounded mb-2 placeholder:text-gray-400" />
                <textarea value={text} rows={3} onChange={e => setText(e.target.value)} placeholder="Text" className="w-full border text-xs border-gray-300 p-2 rounded mb-2 placeholder:text-gray-400" />
                <div className="flex gap-2 justify-end">
                    <button onClick={onClose} className="px-3 text-xs py-1 rounded bg-red-500 hover:bg-red-600 transition-all duration-300 w-16 text-white">Cancel</button>
                    <button
                        onClick={() => {
                            if (!title.trim()) return;
                            dispatch(addWidget({ categoryId, title: title.trim(), text: text.trim() }));
                            onClose();
                        }}
                        className="px-3 text-xs py-1 rounded bg-blue-500 hover:bg-blue-600 transition-all duration-300 w-16 text-white"
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
}
