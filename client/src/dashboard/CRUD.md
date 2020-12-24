All components performing CRUD methods (get, post, put, delete)
need to import axios as below:


import axios from '../axios';


The reason it's importing from a relative directory is because we're
having an axios instance created in that js page with the baseURL of 
our server, so that way all of our components performing the CRUD methods in their click events will hit the correct end points.