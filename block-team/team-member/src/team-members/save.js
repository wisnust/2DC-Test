/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save({ attributes }) {

  return (
    <div {...useBlockProps.save()}>
      <div className="team-members">
        <div className='team-members-heading'>
          <RichText.Content 
            tagName="p"
            className='section-title'
            value={attributes.sectionTitle}
          />
          <RichText.Content 
            tagName="h2" 
            value={attributes.sectionHeading}
          />
          <RichText.Content
            tagName="p" 
            value={attributes.sectionDescription}
          />
        </div>
        <div className='members'>
          {attributes.list.map((item, index) => (
            <div key={index} className='members-item'>
              <div className='members-item-image'>
                {item.image && (
                  <img src={item.image.url} alt={item.image.alt} width={300}/>
                )}
              </div>
              <div className='members-item-content'>
                <RichText.Content
                  tagName="h3"
                  value={item.name}
                />
                <RichText.Content
                  tagName="p"
                  className='job-title'
                  value={item.jobtitle}
                />
                <button className='btn-outline details-toggle'>View Details</button>
                <div className='details-content' style={{"display": "none"}}>
                  <RichText.Content
                    tagName="p"
                    value={item.details}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}