import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	
  return (
		<div { ...useBlockProps(
    { className: 'peak-four-ts' }
    ) }>
			<TextControl
        className='peak-four-ts-title'
        value = { attributes.title }
        onChange = { ( title ) => setAttributes( { title } ) }
        />
      <div className='peak-four-ts-content'>
        <InnerBlocks />
      </div>
		</div>
	);
}
