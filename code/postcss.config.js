module.exports = {
    plugins: [
        require('precss'),
        require('autoprefixer')({
            'browsers': ['> 1%', 'last 2 versions']
        })
    ]
}