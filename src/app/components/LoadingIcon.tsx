export default function LoadingIcon() {
  return (
    <>
      <div className=" bg-gray-200/50 absolute left-0 top-0 w-full h-full"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-7xl">
        <div className="animate-spin">😂</div>
      </div>
    </>
  );
}
