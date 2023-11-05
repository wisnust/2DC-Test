/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */

export default function Edit({ attributes, setAttributes }) {
  const { sectionTitle, sectionHeading, sectionDescription, list } = attributes;

  if (!list) {
    setAttributes({ list: [] }); // Initialize list as an empty array
  }

  // Function to handle item removal
  const removeListItem = (index) => {
    const newList = [...list];
    newList.splice(index, 1); // Remove the item at the specified index
    setAttributes({ list: newList });
  };

  // Function to handle image selection
  const selectImage = (index, newImage) => {
    const newList = [...list];
    newList[index].image = newImage;
    setAttributes({ list: newList });
  };
  return (
    <div {...useBlockProps()}>
      <div className="team-members team-members-editor">
        <div className='team-members-heading'>
          <RichText
            tagName="p"
            value={sectionTitle}
            onChange={(sectionTitle) => setAttributes({ sectionTitle })}
            className='section-title'
            placeholder="Section Title"
          />
          <RichText
            tagName="h2"
            value={sectionHeading}
            onChange={(sectionHeading) => setAttributes({ sectionHeading })}
            className='section-heading'
            placeholder="Section Heading"
          />
          <RichText
            tagName="p"
            value={sectionDescription}
            onChange={(sectionDescription) => setAttributes({ sectionDescription })}
            className='section-description'
            placeholder="Section Description"
          />
        </div>
        <div className='members'>
          {list.map((item, index) => (
            <div key={index} className='members-item'>
              <div className='members-item-image'>
                <MediaUploadCheck>
                  <MediaUpload
                    onSelect={(newImage) => selectImage(index, newImage)}
                    allowedTypes={['image']}
                    value={item.image}
                    render={({ open }) => (
                      <div>
                        {item.image && (
                          <div className="image-preview">
                            <img src={item.image.url} alt={item.image.alt} width={200}/>
                            <button className='remove-image' onClick={() => selectImage(index, null)}>Remove</button>
                          </div>
                        )}
                        <button className='select-image' onClick={open}>Select Image</button>
                      </div>
                    )}
                  />
                </MediaUploadCheck>
              </div>
              <div className='members-item-content'>
                <RichText
                  tagName="h5"
                  value={item.name}
                  onChange={(newName) => {
                    const newList = [...list];
                    newList[index].name = newName;
                    setAttributes({ list: newList });
                  }}
                  placeholder="Name"
                />
                <RichText
                  tagName="p"
                  value={item.jobtitle}
                  className='job-title'
                  onChange={(newJobtitle) => {
                    const newList = [...list];
                    newList[index].jobtitle = newJobtitle;
                    setAttributes({ list: newList });
                  }}
                  placeholder="Job Title"
                />
                <RichText
                  tagName="small"
                  value={item.details}
                  onChange={(newDetails) => {
                    const newList = [...list];
                    newList[index].details = newDetails;
                    setAttributes({ list: newList });
                  }}
                  placeholder="Details"
                />
                <button className='delete-member' onClick={() => removeListItem(index)}>Delete Member</button>
              </div>
            </div>
          ))}
        </div>
        <button
          className='add-member'
          onClick={() => {
            const newList = [
              ...list,
              { name: '', jobtitle: '', details: '' }
            ];
            setAttributes({ list: newList });
          }}
        >
          Add Member
        </button>
        {/* End repeater */}
      </div>
    </div>
  );
}