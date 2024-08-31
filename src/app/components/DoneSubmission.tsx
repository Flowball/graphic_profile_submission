import { Inputs } from "../registrera/page";

interface Props {
  data: Inputs;
}
export default function DoneSubmission({ data }: Props) {
  return (
    <div className="flex flex-col gap-6">
      <h1>Snyggt, nu är ditt paket registrerat!</h1>
      <div>
        <h2>Detaljer</h2>
        <dl>
          <dt>Sändnings-ID</dt>
          <dd>- black hot drink</dd>
          <dt>Milk</dt>
          <dd>- white cold drink</dd>
        </dl>
      </div>
    </div>
  );
}
