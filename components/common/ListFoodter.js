import React, { useState } from 'react';

const ListFoodter = ({ links }) => {

  return (
    <div>
      {links.map((item, index) => (
        <a key={index} href={item?.src}>
          <p className=" hover:text-[#02b6ff] ">{item.title}</p>
        </a>
      ))}
    </div>
  );
};

export default ListFoodter;
