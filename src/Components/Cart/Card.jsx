import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { BsFillTrashFill } from "react-icons/bs";

const Card = ({item,index}) => {
    const dispatch = useDispatch();
  return (
    <>
     <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                    <img
                      src={item.thumbnail}
                      alt="product-image"
                      className="w-full rounded-lg sm:w-40"
                    />
                    <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                      <div className="mt-5 sm:mt-0">
                        <h2 className="text-lg font-bold text-gray-900">
                          {item.title}
                        </h2>
                        <p className="mt-1 text-xs text-gray-700">
                          {item.brand}
                        </p>
                      </div>
                      <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                        <div className="flex items-center border-gray-100">
                          <button onClick={()=>{
                            if(item.qty==1){
                              return
                            }else{

                              dispatch({
                                type:"decrement",
                                payload:index
                              })
                            }
                          }} className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                            -
                          </button>
                          <input
                            className="h-8 w-8 border bg-white text-center text-xs outline-none"
                            type="number"
                            value={item.qty}
                            disabled
                          />
                          <button onClick={()=>{
                            if(item.qty==item.stock){
                              return
                            }else{

                              dispatch({
                                type:"Increment",
                                payload:index
                              })
                            } 
                          }} className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
                            +
                          </button>
                        </div>
                        <div className="flex items-center space-x-4">
                          <p className="text-sm">${item.price * item.qty}.00</p>
                          <button
                            onClick={() => {
                              dispatch({
                                type: "Remove-Item",
                                payload: item,
                              });
                            }}
                          >
                            <BsFillTrashFill />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
    </>
  )
}

export default Card