const Character = ({ selectedChar }) => {
  return (
    <>
      {selectedChar?.name && (
        <div>
          <h2>{selectedChar.name}</h2>
          <img src={selectedChar.image} width={400} height={400} alt="char" />
        </div>
      )}
    </>
  );
};

export default Character;
