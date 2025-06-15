const ListItems = ({items})=>{
    console.log(items);
    return (
        <div>
          {
            items.map((item)=>{
              return (
                <div key={item.id} className="border-b-2 border-gray-200 p-2 m-2 text-left flex justify-between">
                  <div className="max-w-[80%]">
                      <div>{item.name} - {item.price} </div>
                      <div className="flex justify-between">
                        <div className="text-xs">{item.description} </div>
                      </div>
                  </div>
                  <div className="max-w-[15%] flex items-center"> 
                    <img src={item.imageUrl} />
                  </div>
                </div>
              )
            })
          }
        </div>
    )
}

export default ListItems; 