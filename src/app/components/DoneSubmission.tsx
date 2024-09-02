import { Inputs } from "../registrera/page";

interface Props {
  data: Inputs;
}

export default function DoneSubmission({ data }: Props) {
  return (
    <div className="flex flex-col gap-6 p-4 bg-white rounded-lg shadow-lg max-w-md mx-auto mt-8">
      <h1 className="text-2xl font-bold text-center">Snyggt, nu är ditt paket registrerat!</h1>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Detaljer</h2>
        <dl className="divide-y divide-gray-200">
          <div className="py-2 flex justify-between">
            <dt className="font-medium">Sändnings-ID</dt>
            <dd className="text-right">{data.parcelID}</dd>
          </div>
          <div className="py-2 flex justify-between">
            <dt className="font-medium">Längd</dt>
            <dd className="text-right">{data.length}</dd>
          </div>
          <div className="py-2 flex justify-between">
            <dt className="font-medium">Vikt</dt>
            <dd className="text-right">{data.weigth}</dd>
          </div>
          <div className="py-2 flex justify-between">
            <dt className="font-medium">Namn</dt>
            <dd className="text-right">{data.name}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
