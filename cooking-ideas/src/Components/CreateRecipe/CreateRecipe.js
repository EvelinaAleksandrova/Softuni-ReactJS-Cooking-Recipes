import * as recipesService from '../../services/recipesService';
import {useNavigate} from "react-router-dom";

const CreateRecipe = () => {
    const navigate = useNavigate();

    const onRecipeCreate = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);

        let name = formData.get('name');
        let description = formData.get('description');
        let imageUrl = formData.get('imageUrl');
        let type = formData.get('type');

        recipesService.create({
            name,
            description,
            imageUrl,
            type
        }).then(result => {
            navigate('/dashboard');
        });
    }

    return (
        <section id="create-page" className="create">
            <form id="create-form" onSubmit={onRecipeCreate} method="POST">
                <fieldset>
                    <legend>Add new Recipe</legend>
                    <p className="field">
                        <label htmlFor="name">Name</label>
                        <span className="input">
                            <input type="text" name="name" id="name" placeholder="Name"/>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="description">Description</label>
                        <span className="input">
                            <textarea name="description" id="description" placeholder="Description"></textarea>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="image">Image</label>
                        <span className="input">
                            <input type="text" name="imageUrl" id="image" placeholder="Image"/>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="type">Type</label>
                        <span className="input">
                            <select id="type" name="type">
                                <option value="soup">Soup</option>
                                <option value="meat">Meat</option>
                                <option value="vegan">Vegan</option>
                                <option value="cocktails">Drinks & Cocktails</option>
                                <option value="christmas">Christmas</option>
                                <option value="other">Other</option>
                            </select>
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Add Recipe"/>
                </fieldset>
            </form>
        </section>
    );
}

export default CreateRecipe;