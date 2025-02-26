<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Inertia\Inertia;

class ProductsController extends Controller
{
    /**
     * Display a listing of the resource for not logged in person.
     */
    public function preview()
    {
        return Inertia::render('Products/Preview');
    }

    /**
     * Display a listing of the resource for logged in person.
     */
    public function index()
    {
        return Inertia::render('Products/Index');
    }

    /**
     * Display the specified resource.
     */
    public function show()
    {
        return Inertia::render('Products/Show');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Products/Create');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        return Inertia::render('Products/Edit');
    }
}
