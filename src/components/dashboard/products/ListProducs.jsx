import React from "react";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";

const ListProducs = () => {
  return (
    <article className="w-full overflow-x-auto flex items-center justify-center">
      <table className="min-w-[600px] divide-y divide-gray-200">
        <thead>
          <tr className="text-darkSlateGray">
            <th
              scope="col"
              className="px-6 py-3 bg-gray-50 text-left text-base font-medium text-gray-500 uppercase tracking-wider"
            ></th>
            <th
              scope="col"
              className="px-6 py-3 bg-gray-50 text-left text-base font-medium text-gray-500 uppercase tracking-wider"
            >
              Nombre
            </th>
            <th
              scope="col"
              className="px-6 py-3 bg-gray-50 text-left text-base font-medium text-gray-500 uppercase tracking-wider"
            >
              Categoría
            </th>
            <th
              scope="col"
              className="px-6 py-3 bg-gray-50 text-left text-base font-medium text-gray-500 uppercase tracking-wider"
            >
              Precio
            </th>
            <th
              scope="col"
              className="px-6 py-3 bg-gray-50 text-left text-base font-medium text-gray-500 uppercase tracking-wider"
            >
              Cantidad
            </th>
            <th
              scope="col"
              className="px-6 py-3 bg-gray-50 text-left text-base font-medium text-gray-500 uppercase tracking-wider"
            >
              Estado
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 text-darkSlateGray">
          <tr className="text-base">
            <td className="px-6 py-4 whitespace-nowrap flex gap-1">
              <RestoreFromTrashIcon className="text-error cursor-pointer" />
              <CreateOutlinedIcon className="cursor-pointer" />
            </td>
            <td className="px-6 py-4 whitespace-nowrap">Producto 1</td>
            <td className="px-6 py-4 whitespace-nowrap">Categoría 1</td>
            <td className="px-6 py-4 whitespace-nowrap">$10.00</td>
            <td className="px-6 py-4 whitespace-nowrap">5</td>
            <td className="px-6 py-4 whitespace-nowrap">Activo</td>
          </tr>
        </tbody>
      </table>
    </article>
  );
};

export default ListProducs;
