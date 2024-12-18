// takes your entry point js file, and maps out all the dependencies/packages
//  into a dependency graph, combining all necessary files before outputting a single file.
//  used for optimizations

//  node_modules: where the webpack code lives: excluded when websites load

//  src: where we write all of our code: ppl should be able to take it and generate their own website with it
//  dst: what the internet sees when we deploy. we don't need src to show our website

//  webpack takes src code and and output bundled files into dst
// but only javascript. html requires html-webpack-plugin
// css requires npm install --save-dev style-loader css-loader
