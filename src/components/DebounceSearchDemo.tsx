
import { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";

function DebounceSearchDemo() {
    const [inputValue, setInputValue] = useState<string>("");
    const debouncedValue = useDebounce(inputValue);

    useEffect(() => {
        if (debouncedValue) {
            console.log(`Searching for: ${debouncedValue}`);
        }
    }, [debouncedValue]);

    return (
        <div className="min-h-screen bg-slate-100 px-4 py-10">
            <div className="mx-auto max-w-2xl">
                <div className="overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-200">

                    {/* Header */}
                    <div className="bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-6 text-center text-white">
                        <h1 className="text-2xl font-bold uppercase tracking-wide">
                            Debounce Search Demo
                        </h1>
                    </div>

                    {/* Content */}
                    <div className="p-6">

                        <p className="mb-2 text-sm text-slate-600">
                            Debounce Delay:{" "}
                            <span className="font-semibold">500 ms</span>
                        </p>

                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Search..."
                            className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none focus:border-indigo-500"
                        />

                        <div className="mt-5 space-y-2 text-slate-700">
                            <p>
                                <span className="font-semibold">
                                    Current Input:
                                </span>{" "}
                                {inputValue || "—"}
                            </p>

                            <p>
                                <span className="font-semibold">
                                    Debounced Value (after 500ms):
                                </span>{" "}
                                {debouncedValue || "—"}
                            </p>
                        </div>

                        <div className="mt-6">
                            <h2 className="mb-3 font-semibold text-slate-800">
                                Simulated Search Results:
                            </h2>

                            {debouncedValue ? (
                                <ul className="space-y-2 text-sm text-slate-600">
                                    <li>
                                        Result for "{debouncedValue}": Item 1
                                    </li>
                                    <li>
                                        Result for "{debouncedValue}": Item 2
                                    </li>
                                    <li>
                                        Result for "{debouncedValue}": Item 3
                                    </li>
                                </ul>
                            ) : (
                                <p className="text-sm text-slate-400">
                                    Start typing to see results.
                                </p>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default DebounceSearchDemo;
