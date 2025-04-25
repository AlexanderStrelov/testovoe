import React from "react";

/**
 * TODO
 * 1. Добавление любого количества инпутов, после 2-ух существующих,
 * по клику кнопки "Добавить инпут"
 * 2. Во время ввода во всех инпутах производить валидаци: 
 * Если input value, во всех инпутах, "react", то кнопка "Сохранить" 
 * должна стать disabled={false}
 * 
 */

const Form = () => {

  return (
    <form>
        <input 
        type="text" 
        className="input" 
        defaultValue="angular"
      />
        <input 
        type="text" 
        className="input" 
        defaultValue="vue"
      />
      <div className="controls">
        <button
          className="button"
          type="button"
        >
          Добавить инпут
        </button>
        <button
          className="button"
          type="button"
        >
          Сохранить
        </button>
      </div>
    </form>
  );
};

export { Form };