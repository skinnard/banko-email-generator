'use strict'

class SignatureController {
    async start({request, response, view, params}) {
        return view.render( 'start' )
    }

    async generate({request, view}) {

        let { full_name, credentials, role, email, phone, extension, mobile, mobile_clean } = request.post()

        // These are the properties you can access directly in the template via {{prop name}}
        let data = {
            full_name: full_name || 'Dr. So Fun',
            credentials: credentials || 'creds here',
            role: role || 'Director of Fun',
            extension: extension,
            email: email || 'example@email.ca',
            phone: phone || null,
            phone_clean: phone ? phone.replace(/\D/g,'') : null || null,
            mobile: mobile || null,
            mobile_clean: mobile ? mobile.replace(/\D/g,'') : null || null,
            color_primary: '#2e9ef7',
            color_secondary: '#7dc242',
            color_light: 'rgb(130, 130, 130)'
        }

        // This is the template to render
        let signature = view.render( 'signature', data )

        view.share({
            full_name: full_name || 'Dr. So Fun',
            signature: signature
        })

        return view.render( 'generate' )
    }
}

module.exports = SignatureController
