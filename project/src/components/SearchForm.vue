<template>
    <section class="w3l-search-form-3-main">
        <div class="search-form-3">
            <div class="wrapper">
                <div class="section-width">
                    <form action="#" class="search-3-gd" method="post">
                        <div class="d-flex grids-icon">
                            <span><i class="fas fa-text-height"></i></span>
                            <input type="search" name="text" placeholder="Enter Keywords here.." required>
                        </div>
                        <div class="d-flex grids-icon grids-icon-2">
                            <span><i class="fas fa-tags"></i></span>
                            <div class="input-group-btn">
                                <select class="btn btn-default" name="ext" required>
                                    <option selected="">Select Profession</option>
                                    <option>Doctor </option>
                                    <option>Lawyer </option>
                                    <option>Banker</option>
                                    <option>Software Engineer</option>
                                    <option>Accountant</option>
                                    <option>Engineer</option>
                                    <option>And more</option>
                                </select>
                            </div>
                        </div>
                        <div class="d-flex grids-icon grids-icon-2">
                            <span><i class="fas fa-map-marker"></i></span>
                            <div class="input-group-btn">
                                <select class="btn btn-default" name="ext" required>
                                    <option selected="">Select Country</option>
                                    <option>Nigeria</option>
                                    <option>London</option>
                                    <option>India</option>
                                    <option>Bangladesh</option>
                                    <option>Saudi Arabia</option>
                                    <option>America</option>
                                    <option>Srilanka</option>
                                </select>
                            </div>
                        </div>
                        <button type="submit" class="btn button-eff"><span class="fa fa-search"
                                aria-hidden="true"></span>Search</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'SearchForm',
}
</script>