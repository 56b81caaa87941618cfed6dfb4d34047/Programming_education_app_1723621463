/* Summary: This component contains the app's logo and name in a large, bold font. They're both in the same line. And then a line of text underneath it. Both of these lines are center aligned.
*/
Vue.component("simple_footer_component_1723621464", {
    template: `
    <footer id="footer-section" class="flex-1 bg-gradient-to-r from-pink-500 via-purple-500 to-black bg-opacity-50 backdrop-filter backdrop-blur-lg">
            <div id="footer-container" class="max-w-screen-xl p-6 py-8 mx-auto lg:py-16 md:p-10 lg:p-12 rounded-lg shadow-lg">
                <hr id="footer-divider" class="my-6 border-purple-300 sm:mx-auto lg:my-8">
                <div id="footer-content" class="text-center">
                    <div class="flex">
                        <a id="footer-logo-link" href="#" class="flex-1 flex items-center justify-center mb-5 text-2xl font-semibold text-white hover:text-pink-200 transition-colors duration-300">
                            <img id="footer-logo" src="./images/logo.svg" class="h-8 mr-3 sm:h-10" alt="Landwind Logo" />
                            CodeAcademy: Learn to Code Interactively
                        </a>
                    </div>
                </div>
                <div class="flex">
                    <div id="footer-text" class="flex-1 block text-sm text-center text-white hover:text-pink-200 transition-colors duration-300">
                        Master programming skills through hands-on coding challenges and tutorials. Join our community of learners today!
                    </div>
                </div>
            </div>
        </footer> 
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
