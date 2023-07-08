import React from "react";

const ListOrders = () => {
  return (
    <article className="w-full overflow-x-auto flex items-center justify-center">
      <table className="min-w-[600px] divide-y divide-gray-200">
        <thead>
          <tr className="text-darkSlateGray">
            <th
              scope="col"
              className="px-6 py-3 bg-gray-50 text-left text-base font-medium text-gray-500 uppercase tracking-wider"
            >
              ID
            </th>
            <th
              scope="col"
              className="px-6 py-3 bg-gray-50 text-left text-base font-medium text-gray-500 uppercase tracking-wider"
            >
              Referencia
            </th>
            <th
              scope="col"
              className="px-6 py-3 bg-gray-50 text-left text-base font-medium text-gray-500 uppercase tracking-wider"
            >
              Cliente
            </th>
            <th
              scope="col"
              className="px-6 py-3 bg-gray-50 text-left text-base font-medium text-gray-500 uppercase tracking-wider"
            >
              Total
            </th>
            <th
              scope="col"
              className="px-6 py-3 bg-gray-50 text-left text-base font-medium text-gray-500 uppercase tracking-wider"
            >
              Pago
            </th>
            <th
              scope="col"
              className="px-6 py-3 bg-gray-50 text-left text-base font-medium text-gray-500 uppercase tracking-wider"
            >
              Estado
            </th>
            <th
              scope="col"
              className="px-6 py-3 bg-gray-50 text-left text-base font-medium text-gray-500 uppercase tracking-wider"
            >
              Fecha
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 text-darkSlateGray">
          <tr className="text-base">
            <td className="px-6 py-4 whitespace-nowrap flex gap-1">1</td>
            <td className="px-6 py-4 whitespace-nowrap">70d4d7d0</td>
            <td className="px-6 py-4 whitespace-nowrap">muñequita bullock</td>
            <td className="px-6 py-4 whitespace-nowrap">$10.00</td>
            <td className="px-6 py-4 whitespace-nowrap">Paypal</td>
            <td className="px-6 py-4 whitespace-nowrap">Pago Aceptado</td>
            <td className="px-6 py-4 whitespace-nowrap">25/06/2023 13:00:00</td>
          </tr>
        </tbody>
      </table>
    </article>
  );
};

export default ListOrders;
