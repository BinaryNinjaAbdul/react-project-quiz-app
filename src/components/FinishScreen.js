import React from 'react';

function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = '🎖';
  if (percentage >= 80 && percentage < 100) emoji = '🎉';
  if (percentage >= 60 && percentage < 80) emoji = '🙂';
  if (percentage >= 0 && percentage < 60) emoji = '🤔';
  if (percentage === 0) emoji = '🤦‍♂️';

  return (
    <>
      <p className="result">
        {emoji} You scored <strong>{points}</strong> out of {maxPossiblePoints}{' '}
        ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} point)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: 'restart' })}
      >
        Restart quiz
      </button>
    </>
  );
}

export default FinishScreen;
