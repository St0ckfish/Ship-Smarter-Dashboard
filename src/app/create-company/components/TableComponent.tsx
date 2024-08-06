import React from 'react'

function TableComponent() {
    return (
        <div className="overflow-x-auto mt-5">
            <table className="min-w-full divide-y divide-gray-200 border">
                <thead className="bg-[#F1F5F9]">
                    <tr className='font-semibold'>
                        <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                            <input type="checkbox" className="w-4 h-4" />
                        </th>
                        <th className="px-6 py-3 text-nowrap text-left text-xs uppercase tracking-wider">Track ID</th>
                        <th className="px-6 py-3 text-nowrap text-left text-xs uppercase tracking-wider">Car No.</th>
                        <th className="px-6 py-3 text-nowrap text-left text-xs uppercase tracking-wider">Rep. Name</th>
                        <th className="px-6 py-3 text-nowrap text-left text-xs uppercase tracking-wider">Rep. Phone</th>
                        <th className="px-6 py-3 text-nowrap text-center text-xs uppercase tracking-wider" colSpan={2}>City</th>
                        <th className="px-6 py-3 text-nowrap text-left text-xs uppercase tracking-wider">Arrival Days</th>
                        <th className="px-6 py-3 text-nowrap text-left text-xs uppercase tracking-wider">Cost</th>
                        <th className="px-6 py-3 text-nowrap text-left text-xs uppercase tracking-wider"></th>
                    </tr>
                    <tr>
                        <th colSpan={5}></th>
                        <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">From</th>
                        <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">To</th>
                        <th colSpan={3}></th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {Array(3).fill(0).map((_, idx) => (
                        <tr className='font-medium' key={idx}>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <input type="checkbox" className="w-4 h-4" />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm ">
                                <div>VHINT1187</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">5789</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">Ahmed</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">0000000</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">Marrakech</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">Casablanca</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-pink-500">Day&Time</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">50 MAD</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">...</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TableComponent
