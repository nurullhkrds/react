import React from "react";

function PlayList() {
  return (
    <div className="mx-6 py-2 mt-4 flex-auto border-t border-white border-opacity-25 overflow-auto">
      <ul>
        {new Array(200).fill(
          <li>
            <a href="#" className="text-sm text-link hover:text-white flex h-8">
              22. Çalma Listem
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}

export default PlayList;
