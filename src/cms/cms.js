import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'
import { SlidesControl, SlidesPreview } from './Slides'

import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerWidget('slides', SlidesControl, SlidesPreview)

CMS.registerPreviewTemplate('index', IndexPagePreview)
