export default function CarDetailPage({ params }) {
  return (
    <div className="min-h-screen pt-24 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-white mb-4">Car Detail Page (WIP)</h1>
      <p className="text-xl text-accent mb-4">Viewing Car ID: {params.id}</p>
      <p className="text-gray-400">Assigned to: Member 4</p>
    </div>
  );
}
