import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
  const title = attributes.title;
  let splitText = title.split('');
  splitText = splitText.map((letter, index) => {
    return (
      <span key={index} className={letter}>{letter}</span>
    )
  })

	return (
		<div { ...useBlockProps.save(
      { className: "peak-four-ts" }
    ) }>  
      <h3 className="peak-four-ts-title">
        {splitText}
        <svg className="peak-four-ts-toggle" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox='0 0 64 64' >
          <g fill="none" stroke="#000edc" stroke-width="2">
            <circle cx="32" cy="32" r="31"/>
          </g>
          <path fill="none" stroke="#000edc" stroke-linecap="round" stroke-width="2" d="M14 32.252h36" data-name="Line 1"/>
          <path fill="none" stroke="#000edc" stroke-linecap="round" stroke-width="2" d="M32.252 14v36" data-name="Line 123"/>
        </svg>
      </h3>
      <div className="peak-four-ts-content">

        <div className='peak-four-ts-content-inner'>
          <InnerBlocks.Content />
        </div>
      </div>
		</div>
	);
}
