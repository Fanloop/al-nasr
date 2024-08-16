interface propList {
  title: string;
  content: string;
  img: string;
}

function ListFacility(props: propList) {
  return (
    <div className="flex gap-3 lg:gap-5 shadow-lg p-4 lg:p-5 rounded-lg bg-white">
      <img
        className="aspect-square h-8 md:h-10"
        src={props.img}
        alt={`${props.title} icon`}
      />
      <div className="flex flex-col gap-1">
        <h4 className="font-semibold tracking-wide text-lg lg:text-xl">
          {props.title}
        </h4>
        <p className="font-nunito text-sm">{props.content}</p>
      </div>
    </div>
  );
}

export default ListFacility;
